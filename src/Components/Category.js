import { Link } from 'react-router-dom'


export default function Category({ image, title, id }) {

    return (
        <>

            <div className="col-lg-3 col-md-6 pb-1">
                <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ "height": "300px", "width": "250px" }}>

                    <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ "width": "100px", "height": "100px" }}>
                        {/* <i className={`fa fa-3x ${icon} text-secondary`}></i> */}
                        <img src={`${image}`} style={{ "height": "150px", "width": "150px", "borderRadius": "50%" }} />
                    </div>
                    <Link to={`/singlecategory/${id}`}>
                        <h4 className="font-weight-bold m-0">{title}</h4>
                    </Link>
                </div>
            </div>

        </>
    )
}
