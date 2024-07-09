import styles from './styles.module.scss';
import { Button, Flex } from 'antd';
import { BsCurrencyDollar } from "react-icons/bs";

const pricing = [{
  id: 1,
  priceType: "Free",
  price: 0,
  btnText: 'Currently Using',
  btnDisabled: true,
  benefits: [{
    id: 'b-1',
    name: "One team per user",
  }, {
    id: 'b-2',
    name: "One lock per canvas",
  }, {
    id: 'b-3',
    name: "5 cavases per user",
  }]
}, {
  id: 2,
  priceType: "Pro",
  price: 80,
  btnText: 'Upgrade',
  btnDisabled: false,
  benefits: [{
    id: 'b-4',
    name: "Multiple teams",
  }, {
    id: 'b-5',
    name: "More Canvases",
  }, {
    id: 'b-6',
    name: "More Storage",
  }, {
    id: 'b-7',
    name: "More locks",
  }]
}]

export default function TopPricing() {

  return (
    <div className={styles.solutionMainDiv}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Canvas is built to protect & prioritize your interest</h1>
        </div>

        <div className={styles.sticky}>
          {pricing.map((price) => <div key={price.id} className={styles.card}>
            <span className={styles.text1}>
              {price.priceType}
            </span>
            <span className={styles.text}>
              <BsCurrencyDollar size={24} /> {price.price}
            </span>
            <div style={{ margin: '40px 0', display: 'flex', flexDirection: 'column' }}>
              {price.benefits.map((b) => <span key={b.id}>
                ✓ {b.name}
              </span>)}
            </div>
            <Flex justify='center'>
              {price.btnDisabled ? <div className={styles.buttonBottom}>
                <span style={{ color: '#00B3A6', fontSize: 18 }}>{price.btnText}</span>
              </div> :
                <Button type={'primary'} className={styles.buttonBottom}>
                  {price.btnText}
                </Button>}
            </Flex>
          </div>)}
        </div>
      </div>
    </div>
  )
}
