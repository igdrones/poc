import React, { Component } from 'react'
import { Poc_User } from '../../Classes/Classes';
import PocUserCard from '../../Components/Cards/PocUser';
import { doGetPocUsers, doPostPocUser } from '../../Services/ApiServices';
import './UsersPage.css';

export default class UserPage extends Component {
    state={
        users:[] as Poc_User[],
        userRequest:new Poc_User("","","","")
    }

    componentDidMount(){
        this.getPocUsers(); 
    }

    

    getPocUsers=()=>{
        doGetPocUsers().then((res:any)=>{
            if(Array.isArray(res) && res.length>0){
                const users=res.map((user: any) => {
                    return new Poc_User(""+user.id,user.firstName,user.lastName,""+user.phoneNumber);
                });
                this.setState({
                    users:users,
                    userRequest:new Poc_User("","","","") 
                })
            }else{
                this.setState({
                    users:[],
                    userRequest:new Poc_User("","","","") 
                })
            }
        },(err:any)=>{
            this.setState({
                users:[],
                userRequest:new Poc_User("","","","")
            })
        })
    }

    postPocUsers=()=>{
        const req={
            firstName:this.state.userRequest.firstname,
            lastName:this.state.userRequest.lastname,
            phoneNumber:(this.state.userRequest.phone.trim()!=="")?parseInt(this.state.userRequest.phone.trim()) : 0
        }
        console.log(req)
        doPostPocUser(req).then((res:any)=>{
            this.getPocUsers();
        },(err:any)=>{
            this.getPocUsers();
        })
    }

    onInputChange=(e:any)=>{
        const {name,value}=e.target;
        this.setState((prev:any)=>{
            let st:any=prev;
            st.userRequest[""+name]=value;
            return st;
        })
    }

    formSubmit=(e:any)=>{
        e.preventDefault();
        this.postPocUsers();
    }

    render() {
        return (
            <section className="homepage">
                <div className="homepage-row">
                    <div className="homepage-full-col ">
                        <form onSubmit={this.formSubmit}>
                            <div style={{display:'block',marginBottom:'1rem'}}>
                                <label>Firstname : </label>
                                <input required type="text" onChange={this.onInputChange} value={this.state.userRequest.firstname} name="firstname"/>
                            </div>
                            <div style={{display:'block',marginBottom:'1rem'}}>
                                <label>Lastname : </label>
                                <input required type="text" value={this.state.userRequest.lastname} onChange={this.onInputChange} name="lastname"/>
                            </div>
                            <div style={{display:'block',marginBottom:'1rem'}}>
                                <label>Phone : </label>
                                <input required type="phone" value={this.state.userRequest.phone} onChange={this.onInputChange} pattern="[0-9]{10,10}" name="phone"/>
                            </div>
                            <div style={{display:'block',marginBottom:'1rem'}}>
                                <button style={{marginLeft:'1rem'}} type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                    {
                        this.state.users.map((user: Poc_User, index: number) => {
                            return (
                                <div className="homepage-col" key={"userdata" + index}>
                                    <PocUserCard user={user} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
