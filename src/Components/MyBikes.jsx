import Header from "./Header";
import ProfileNavbar from "./ProfileNavBar";
import BikeListDisplay from "./BikeListDisplay";

export default function MyBikes() {

    return (
        <div>
            <div><Header /></div>
            <div><ProfileNavbar /></div>
            <div><BikeListDisplay /></div>
        </div>
    );
}