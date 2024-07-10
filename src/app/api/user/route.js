import { apiPost } from "../database";
import { apiGet } from "../database";

export async function POST(req, res) {
  const body = await req.json();
  console.log(body, req)
  const { name, email } = body;

  console.log("====>>>>>", name, email)
  const query = `
    INSERT INTO user_info(name, email)
    VALUES(?, ?)
  `;
  const values = [name, email];

  let status, respBody;
  await apiPost(query, values)
    .then(() => {
      status = 200;
      respBody = { message: "Successfully created user" };
    })
    .catch((err) => {
      status = 400;
      respBody = err;
    });
  return Response.json(respBody, {
    status,
  });
}

export async function GET(req, res) {
  const query = `
     SELECT * from user_info
   `;

  let status, body;
  try {
    await apiGet(query)
      .then((res) => {
        status = 200;
        body = res;
      })
      .catch((err) => {
        status = 400;
        body = { error: err };
      });
    return Response.json(body, {
      status,
    });
  } catch (error) {
    console.error(error.message);
    return Response.json(
      { error: error },
      {
        status: 400,
      }
    );
  }
}