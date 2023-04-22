import { useState } from 'react';
import '.././App.css';
function BoardItem(props) {
    var data = props.data;
    const [company, setCompany] = useState(data.company)
    const [shares, setShares] = useState(data.shares)
    const [totalPrice, setTotalPrice] = useState(data.price)
    const [editing, enableEditing] = useState(false)
    const [companyName, setCompanyName] = useState(data.company)
    const [errorMessage, setErrorMessage] = useState('')
    const [originalCompany, setOriginalCompany] = useState(data.company)

    function getStocksName(companyName) {
        var stockID;
        props.stocks.forEach(element => {
            if (element.name === companyName) {
                stockID = element.id
            }
        });
        return stockID;
    }
    const saveData = () => {
        var stockID = getStocksName(companyName)

        if (companyName !== originalCompany) {
            const originalCompanyID = getStocksName(originalCompany);
            setCompany(companyName)
            props.deleteItem(originalCompanyID)
            
        }

        var myHeaders = new Headers();
        const token = window.localStorage.getItem('token')
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token + "");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                stock_id: stockID,
                quantity: shares,
                cost: totalPrice
            }),
            redirect: 'follow'
        };

        fetch('https://backend.uprise.partnerswire.com/authenticated/v1/holdings', requestOptions)
            .then(response => response.json())
            .then(response => {

                if (response.error) {
                    setErrorMessage('One or more values ​​are entered incorrectly!')
                } else {
                    enableEditing(false)
                }
            })
            .catch(err => console.error(err));

    }


    const handleChange = (e) => {
        setCompanyName(e.target.value);
    };


    return (
        (editing === false)
            ? <div className='boardItem'>
                <div>
                    <p className="boardItemTitle">Portfolio #{data.id}</p>
                    <svg data-name="Сгруппировать 51049" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                        <circle data-name="Эллипс 119" cx="20" cy="20" r="20" fill="#daebf7" />
                        <path id="check_mark_-4" data-name="check mark -4" d="M9.1,15.059a1.779,1.779,0,0,0-2.539-.018l-.128.128a1.779,1.779,0,0,0,.012,2.523l6.733,6.632L26.152,11.439a1.779,1.779,0,0,0,.007-2.518l-.143-.143a1.779,1.779,0,0,0-2.53.008L13.181,19.271Z" transform="translate(3.702 3.711)" fill="#0067ff" />
                    </svg>
                </div>

                <input value={company} type="text" name="company" id="company" placeholder='Company' onChange={e => setCompany(e.target.value)} readOnly={(editing === false) ? true : false} />
                <input value={shares} type="text" name="shares" id="shares" placeholder='Shares' onChange={e => setShares(e.target.value)} readOnly={(editing === false) ? true : false} />
                <input value={totalPrice} type="text" name="totalPrice" id="totalPrice" placeholder='Total Price' onChange={e => setTotalPrice(e.target.value)} readOnly={(editing === false) ? true : false} />

                <div className='boardItemControls'>
                    <p onClick={e => enableEditing(true)}>Edit</p>
                    <p onClick={e => {
                        props.deleteItem(data.stock_id)
                    }}>Delete</p>
                </div>
            </div>
            : <div className="boardItem boardAddForm">
                <div className="boardAddFormHeader">
                    <p>Add New Holding</p>
                </div>

                <div>
                    <p className="boardItemTitle">Portfolio #1</p>
                </div>

                <div className='boardAddFormInputs'>
                    <select name="company" id="company" className='selectCompany' value={companyName} onChange={handleChange}>
                        <option value="Enter Company">Enter Company</option>
                        {
                            props.stocks.map((item, key) => (
                                <option key={key} value={item.name}>{item.name}</option>
                            ))
                        }
                    </select>

                    <input value={shares} type="text" name="shares" id="shares" placeholder='Enter Number of shares' onChange={e => setShares(e.target.value)} />
                    <input value={totalPrice} type="text" name="totalPrice" id="totalPrice" placeholder='Enter total price of buying the shares' onChange={e => setTotalPrice(e.target.value)} />
                </div>
                <div>
                    <p className='boardErrorMSG'>{errorMessage}</p>
                </div>
                <div className='boardAddFormButton'>
                    <button onClick={e => saveData()}>SAVE HOLDING</button>
                </div>
            </div>

    );
}

export default BoardItem;
