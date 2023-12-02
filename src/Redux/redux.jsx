import Counter from "./pembahasan/Counter";
import store from "../app/features/store";
import { Provider } from "react-redux";

const Redux = () => {
    return ( 
        <div>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    );
}
 
export default Redux;