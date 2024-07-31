import { Provider } from "react-redux";
import { Router, Routes,Route} from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AuthLayout from "./Layout/AuthLayout";
import About from "./pages/About";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import Register from "./pages/Register";
import AppStore from "./store/AppStore";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                     <Provider store={AppStore}>
                        <AppLayout bodyBackground="#0E1744"/>
                    </Provider>
                    }/>

                <Route path="/about" element={
                     <Provider store={AppStore}>
                        <About bodyBackground="#0E1744"/>
                    </Provider>
                    }/>
                
                <Route path="/sign-up" element={
                    <Provider store={AppStore}>
                        <AuthLayout>
                            <Register/>
                        </AuthLayout>
                    </Provider>
                }/>

            <Route path="/sign-in" element={
                <Provider store={AppStore}>
                    <AuthLayout>
                        <Login/>
                    </AuthLayout>
                </Provider>
            }/>
            <Route path="/plans" element={
                <Provider store={AppStore}>
                    <Plans/>
                </Provider>
            }/>

        </Routes>
        </>
    );
}

export default App;
