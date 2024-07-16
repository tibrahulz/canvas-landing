'use client';

import Parser from 'html-react-parser';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

import { StyledFaqsPage } from '../../components/StyledPages'
import { faqsData } from '../../assets/data';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';

function FAQ() {
  const [navigations, setNavigations] = useState({ '0-0': true });

  return (
    <ThemeProvider theme={theme}>
      <StyledFaqsPage>
        <h2 className="title">Frequently Asked Questions</h2>
        {faqsData?.map((faq, index) => (
          <div className="sub-title" key={faq?.category}>
            <h4 className="sub-title">{faq?.category}</h4>
            {faq?.list?.map((data, idx) => {
              return (
                <div key={data?.ques}>
                  <div
                    className="ques-container"
                    onClick={() =>
                      setNavigations({
                        ...navigations,
                        [`${index}-${idx}`]: !navigations[`${index}-${idx}`]
                      })
                    }
                    role="presentation"
                  >
                    {navigations[`${index}-${idx}`] ? (
                      <AiOutlineDown />
                    ) : (
                      <AiOutlineRight />
                    )}
                    <span>{idx + 1}.</span>
                    {data?.ques}
                  </div>
                  {navigations[`${index}-${idx}`] ? (
                    <p className="ans-text">{Parser(data?.ans)}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </StyledFaqsPage>
    </ThemeProvider>
  );
}
export default FAQ;
