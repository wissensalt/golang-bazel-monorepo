import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import {useState} from "react";

interface Api {
    name: string;
    url: string;
}

function App() {
    const apiList: Array<Api> = [
        {name: 'API APP-ONE', url: 'http://localhost:8080/swagger/doc.json'},
        {name: 'API APP-TWO', url: 'http://localhost:8081/swagger/doc.json'}
    ];

    const [selectedApi, setSelectedApi] = useState(apiList[0].url);

    const handleApiChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedApi(event.target.value);
    }

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                right: 0,
                padding: '10px',
                backgroundColor: 'rgb(98, 160, 63)'
            }}>
                <label
                    htmlFor="apiSelect"
                    style={{
                        marginRight: '10px',
                        fontSize: '23px',
                        color: '#333'
                    }}>
                    Select API Definition:
                </label>
                <select
                    id="apiSelect"
                    onChange={event => handleApiChange(event)}
                    value={selectedApi}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)'
                    }}>
                    {apiList.map(api => (
                        <option key={api.url} value={api.url}>
                            {api.name}
                        </option>
                    ))}
                </select>
            </div>
            {selectedApi && <SwaggerUI url={selectedApi}/>}
        </>
    )
}

export default App