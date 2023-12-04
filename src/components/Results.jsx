import { calculateInvestmentResults, formatter } from "../util/investment";
let investment = [
  {
    a: 1000,
    b: 10,
    c: 10,
    d: 100,
    x: 10000,
  },
  {
    a: 1000,
    b: 10,
    c: 10,
    d: 100,
    x: 10000,
  },
];
export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalInvest = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year} >
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
/*<tbody className="center">
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest(Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </tbody>
      <tbody className="center">
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest(Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </tbody>*/
/*<section id="result">
      <div className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
      </div>
      {investment.map((inner) => (
        
          <tbody>
            <tr>
              <td>{inner.a}</td>
              <td>{inner.b}</td>
              <td>{inner.c}</td>
              <td>{inner.d}</td>
              <td>{inner.x}</td>
            </tr>
          </tbody>
        
      ))}
    </section>*/
