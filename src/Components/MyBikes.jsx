import Header from "./Header";
import ProfileNavbar from "./ProfileNavBar";
import BikeDisplay from "./Bike/BikeDisplay";

export default function MyBikes() {

    return (
        <div>
            <div><Header /></div>
            <div><ProfileNavbar /></div>
            <div><BikeDisplay /></div>
        </div>
    );
}