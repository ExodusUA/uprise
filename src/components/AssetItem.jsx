import '.././App.css';

function AssetItem(props) {
    var data = props.data;
console.log(data)
    function checkColor(number) {
        if (number < 0) {
            return 'dataRed'
        }
    }

    return (
        <div className="portfolioListItem">
            <div className='company'>
                <p className='companyName'>{data.Company}</p>
            </div>
            <div>
                <p>{data.lastPrice}</p>
            </div>
            <div>
                <p className={checkColor(data.thirty_day_change / data.lastPrice)}>{(data.thirty_day_change / data.lastPrice).toFixed(2)} %</p>
            </div>
        </div>
    );
}

export default AssetItem;
