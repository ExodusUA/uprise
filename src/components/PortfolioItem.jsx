import '.././App.css';

function PortfolioItem(props) {
    var data = props.data;

    function checkColor(number) {
        if (number > 0) {
            return 'dataGreen'
        } else if (number.indexOf('-') !== -1) {
            return 'dataRed'
        }
    }

    return (
        <div className="portfolioListItem">
            <div className='company'>
                <p className='companyName'>{data.Company}</p>
            </div>
            <div>
                <p>{data.Invested} %</p>
            </div>
            <div>
                <p>{data.Value} %</p>
            </div>
            <div>
                <p className={checkColor(data.MTD)}>{data.MTD} %</p>
            </div>
            <div>
                <p className={checkColor(data.YTD)}>{data.YTD} %</p>
            </div>
        </div>
    );
}

export default PortfolioItem;
