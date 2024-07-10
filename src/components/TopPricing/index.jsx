import styles from './styles.module.scss';
import { Button, Flex } from 'antd';
import { BsCurrencyDollar } from "react-icons/bs";

const pricing = [{
  id: 1,
  priceType: "Free",
  description: 'Experience the Micro Engine on upto 4 content uploads per month',
  description1: `(choose from audio, video, text, images) \n \n \n \n\n \n\n`,
  price: "$0",
  btnText: 'Currently Using',
  btnDisabled: true,
  benefits: [{
    id: 'b-1',
    name: "One user per team",
  }, {
    id: 'b-2',
    name: "One lock or micro business logic per upload",
  }, {
    id: 'b-3',
    name: "Upto 500MB space for free upload",
  }]
}, {
  id: 2,
  priceType: "Pro",
  price: "$100 / Month",
  description: 'Experience the Micro Engine on upto 50 content uploads per month',
  description1: '(choose from audio, video, text, images; and multimedia content ie micro locks with two or more types of content uploads)\n \n\n\n',
  btnText: 'Upgrade',
  btnDisabled: false,
  benefitsHeader: 'Everything in Free, plus:',
  benefits: [{
    id: 'b-4',
    name: "Upto 5 Team Members.",
    description: 'They can experience the micro engine, their way!'
  }, {
    id: 'b-5',
    name: "Unlimited Locks & Micro Business Logics.",
  }, {
    id: 'b-6',
    name: "Integrations* to choose from.",
  }]
}, {
  id: 3,
  priceType: "Enterprise",
  price: "Custom Pricing",
  description: 'Get in touch on hello@canvas.space',
  btnText: 'Upgrade',
  btnDisabled: false,
  benefitsHeader: 'Everything in Pro, plus:',
  benefits: [{
    id: 'b-4',
    name: "Access to our APIs",
  }, {
    id: 'b-5',
    name: "Priority support",
  }, {
    id: 'b-6',
    name: "Customized onboarding & Dedicated Customer Success Manager",
  }]
}]

export default function TopPricing() {

  return (
    <div className={styles.solutionMainDiv}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 style={{ color: '#3a3939', fontFamily: 'Nunito' }}>Canvas is built to prioritize your business interests.</h1>
          <h2 style={{ marginTop: 0, fontFamily: 'Nunito' }}>start building new interactions & revenues with The Micro Advantage</h2>
        </div>

        <div className={styles.sticky}>
          {pricing.map((price) => <div key={price.id} className={styles.card}>
            <span className={styles.text1}>
              {price.priceType}
            </span>
            <span className={styles.text}>
              {price.price}
            </span>
            <span style={{ marginTop: 20, fontFamily: 'Lato-Regular', fontSize: 14 }}>{price.description}</span>
            <pre style={{ fontFamily: 'Lato-Regular', lineHeight: '11px', margin: 0, fontSize: 11, textWrap: 'wrap' }}><br />{price.description1}</pre>
            <span style={{ marginTop: 20, fontFamily: 'Lato-Regular', fontSize: 18 }}><b>{price.benefitsHeader}</b></span>
            <div style={{ margin: '10px 0', display: 'flex', flexDirection: 'column', fontFamily: 'Lato-Regular', fontSize: 18 }}>
              {price.benefits.map((b) => <span key={b.id} style={{ marginBottom: 20, fontFamily: 'Lato-Regular', fontSize: 18 }}>
                ✓ {b.name}
                <p style={{ fontFamily: 'Lato-Regular', lineHeight: '11px', margin: 0, marginLeft: 18, position: 'relative', top: '-8px', fontSize: 11 }}><br />{b.description}</p>
              </span>)}
            </div>
            <Flex justify='center'>
              {price.priceType === 'Enterprise' && <Button className='ct-btn' style={{ margin: '15px 0', height: 40, width: 150, fontSize: 18 }}>
                Contact Us
              </Button>}
            </Flex>
          </div>)}
        </div>
      </div>
    </div>
  )
}
