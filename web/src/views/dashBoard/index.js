import './styles.css';

export default function DashBoardView(){

    return (
        <>
            <div className="content-dashboard">
                <div className="content-dashboard-filter">
                    <form >
                        <input type="text"></input>
                        <input type="text"></input>
                        <input type="text"></input>
                        <input name='marca' type={'checkbox'} ></input>
                        <input type={'range'}></input>
                        <input type={'range'}></input>
                        <input type={'checkbox'}></input>
                    </form>
                </div>
                <div className="content-dashboard-resultsearch">
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                    <div className="item-result-search"/>
                </div>
            </div>
            
        </>
    );

}