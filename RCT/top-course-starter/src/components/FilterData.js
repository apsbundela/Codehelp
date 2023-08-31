
function FilterData(props){
    let filterdata = props.filterdata;
    let category = props.category;
    let setCategory = props.setCategory;

    function filetrHandler(title){
        setCategory(title);
    }
    return (<div className="d-flex justify-content-center gap-3 m-2">
            {
                filterdata.map((data)=> (
                    <button className="btn btn-outline-dark bg-dark p-2 rounded-2 border-0 text-light" onClick={()=>filetrHandler(data.title)} key={data.id}>{data.title}</button>
                ))
            }
    </div>);
}

export default FilterData;