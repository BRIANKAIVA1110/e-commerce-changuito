import '../card/styles.css';

export default function Card(props){
    const {pathImg, detail, price} = props;
    
    return (
        <>
            <div className="card">
                <div className="card-photo">
                    <img src={ pathImg }/>
                </div>
                <div className="card-details">
                    <div>
                        <a href='#'>
                            <span>{ detail }</span>
                        </a>
                    </div>
                    <div>
                        <span>{ price }</span>
                    </div>
                </div>
            </div>
        </>
    );
}