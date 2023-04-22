import '.././App.css';

function ChartTable(props) {

    var chartData = props.data;


    return (
        <div className='chartBlock'>
            <div className="chartBlockHeader">
                <p className="chartBLockSubtitle">PORTFOLIO</p>
                <p className="chartBLockTitle">ESTIMATED DIVIDEND YIELD</p>
            </div>
            <div className="chartBlockBody tabletChart">
                <p className='chartBlockPercent'>{props.data.Percent}%</p>
                <p className='chartTableName'>Your Top Divident Assets</p>
                <div className="chartTable">
                    <div className='chartTableHeader'>
                        <p>Asset</p>
                        <p>Yield</p>
                    </div>
                    <div className="chartTableList">
                        {
                            chartData.Data.map((item, key) => (
                                <div key={key} className="chartTabletItem">
                                    <p>{item.asset}</p>
                                    <p>{item.yield}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartTable;
