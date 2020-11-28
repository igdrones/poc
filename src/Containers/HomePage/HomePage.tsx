import React, { Component } from 'react';
import { GeoCordinates, User, UserAddress, UserCompany } from '../../Classes/Classes';
import UserCard from '../../Components/Cards/UserCard';
import { doGetUsers } from '../../Services/ApiServices';
import './HomePage.css';

export default class HomePage extends Component {

    state: any = {
        users: [] as User[],
        actionUsers: [] as User[],
        searchTerm: "",
        searchKey: "name"
    }

    search = (value: string = "") => {

        const key = this.state.searchKey;
        const data: User[] = this.state.users.filter((user: User) => {
            if (key !== "" && typeof user[key] === 'string') {
                return (user[key].trim().toLowerCase().indexOf(value.toLowerCase()) === 0); // starts with
                // return (user[key].trim().toLowerCase().indexOf(value.toLowerCase())!==-1); // in between
            } else {
                return user;
            }
        }).sort(function (a: User, b: User) {
            if (key !== "" && typeof a[key] === 'string') {
                if (a[key].trim() < b[key].trim()) {
                    return -1;
                }
                if (a[key].trim() > b[key].trim()) {
                    return 1;
                }
            }
            return 0;
        });

        this.setState({
            actionUsers: data,
            searchTerm: value
        });

    }

    convertUserResponse = (res: any) => {

        const users: User[] = res.map((user: any) => {

            let userData = new User(user.id, user.name, user.username, user.email, user.phone.split(" ")[0], user.website);

            if (typeof user.address === 'object') {
                const address = user.address;
                let geoCoordinates = new GeoCordinates();
                if (typeof address.geo === 'object') {
                    geoCoordinates.latitude = user.address.geo.lat;
                    geoCoordinates.longitude = user.address.geo.lng;
                }
                const addressData = new UserAddress(address.street, address.suite, address.city, address.zipcode, geoCoordinates);
                userData.address = addressData;
                userData.fulladdress = address.city + " " + address.zipcode;
            }

            if (typeof user.company === 'object') {
                const company = user.company;
                let companyData = new UserCompany(company.name, company.catchPhrase, company.bs);
                userData.company = companyData;
            }

            return userData;

        }).sort(function (a: User, b: User) {
            if (a["name"].trim() < b["name"].trim()) {
                return -1;
            }
            if (a["name"].trim() > b["name"].trim()) {
                return 1;
            }
            return 0;
        });;

        return users;
    }

    getUsers = () => {
        doGetUsers().then((res: any) => {
            if (Array.isArray(res) && res.length > 0) {

                const users = this.convertUserResponse(res);
                this.setState({
                    users: users,
                    actionUsers: users
                }, () => {
                    // this.search("c");
                });

            } else {

                this.setState({
                    users: [],
                    actionUsers: []
                });

            }
        }, (err: any) => {

            this.setState({
                users: [],
                actionUsers: []
            });

        });
    }

    selectKey = (e: any) => {
        e.preventDefault();
        this.setState({
            searchKey: (e.target.value)
        }, () => {
            this.search(this.state.searchTerm);
        });
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <section className="homepage">
                <div className="homepage-row">
                    <div className="homepage-full-col display-flex">
                        <div className="input-box-group">
                            <div className="input-box-prepend">
                                <select className="select-box" onChange={this.selectKey}>
                                    <option value="name">Name</option>
                                    <option value="phone">Phone</option>
                                    <option value="website">Website</option>
                                    <option value="company">Company</option>
                                    <option value="fulladdress">Address</option>
                                </select>
                            </div>
                            <input className="input-box" onChange={(e: any) => this.search(e.target.value)} type="text" placeholder="Search" />
                        </div>
                    </div>
                    {
                        this.state.actionUsers.map((user: User, index: number) => {
                            return (
                                <div className="homepage-col" key={"userdata" + index}>
                                    <UserCard user={user} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }

}
