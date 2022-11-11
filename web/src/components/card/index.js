import '../card/styles.css';

export default function Card(props){
    const {pathImg, details} = props;
    
    return (
        <>
            <div className="card">
                <div className="card-photo">
                    <img src={ pathImg }/>
                </div>
                <div className="card-details">
                    <div>
                        <a href='#'>
                            <span>Funda iphone 14 / plus / pro / pro max</span>
                        </a>
                    </div>
                    <div>
                        u$d 999,99
                    </div>
                </div>
            </div>
        </>
    );
}