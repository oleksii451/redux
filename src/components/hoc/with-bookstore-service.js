import {BookStoreServiceConsumer} from "../../bookstore-service-provider/bookstore-service-provider";

const withBookstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return <Wrapped {...props} bookstoreService={bookstoreService}/>
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}

export default withBookstoreService;