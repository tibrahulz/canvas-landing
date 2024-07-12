
function CanvasViews(props) {
  return (
    <div className="flex">
      <p className="descriptions">Total Views : {props?.views || 0}</p>
    </div>
  );
}
export default CanvasViews;
