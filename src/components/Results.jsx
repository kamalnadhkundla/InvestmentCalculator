import {calculateInvestmentResults, formatter} from '../util/investment.js'
export default function Results({input}){
   const results= calculateInvestmentResults(input);
   const initialInvestment= results[0]. valueEndOfYear-results[0].interest-results[0].annualInvestment;
   
    return<p>
        <table id="results">
 <tr>
    <th>year</th>
    <th>Investment value</th>
    <th>total Interest</th>
    <th> Invested capital</th>
 </tr>
 <tbody>
    {results.map(yearData=>{
        const totalInterest= yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment;
        const totalamountInvested = yearData.valueEndOfYear-totalInterest;
        return <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>
              {formatter.format(yearData.valueEndOfYear)}
            </td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalamountInvested)}</td>
        </tr>
    })}
 </tbody>
        </table>
       
    </p>

}