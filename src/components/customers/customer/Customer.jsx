import { getCustomerById } from "../../../core/services/CustomerService";

export default function Customer(props) {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        getCustomerById(props.match.params.id).then(response => {
            setCustomer(response.data);
        })
    }, [props.match.params.id]);
}