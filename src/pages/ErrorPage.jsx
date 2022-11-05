import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p><i>Not found</i></p>
        </div>
    )
}


export default ErrorPage