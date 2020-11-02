import React from 'react';
import {Container, Row,Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {Form, FromGroup} from "reactstrap";

export default function ProfilePage() {
    return (
        <Container>
            <h1 className="text-center">Thông tin tài khoản</h1>
            <Row className="justify-content-md-center">
                <Col lg="4">
                    <FontAwesomeIcon icon={faUserCircle} size="4x"></FontAwesomeIcon>
                </Col>
                <Col lg="8">
                    <Form method="POST" action="/profile">
                        
                    </Form>
                </Col>
            </Row>
        </Container>

    //     <div class="container">
    //     <h1 class="text-center">Thông tin tài khoản</h1>
    //     <div class="container shadow p-3 mb-5 bg-white rounded">
    //         <div class="row justify-content-md-center">
    //             <div class="col-lg-4">
    //                 <img src="./images/round-account.png" class="rounded-circle">
    //             </div>

    //             <div class="col-lg-8">
    //                 
    //                 <form class="content" method="POST" onsubmit="return changePassword(this)" action="/account/profile" id="edit-account">
    //                     <div class="container mb-2">
    //                         Permission: <i><b>{{infor.permiss}}</b></i>
    //                         {{#if isBidder}}
    //                         <div class="form-group">
    //                             <div class="input-wrap margin">
    //                                 <label class="checkbox">
    //                                     <input type="checkbox" id="is_change_level" name="is_change_level"
    //                                         value="checked">
    //                                     <b>Request to be Seller</b>
    //                                 </label>
    //                             </div>
    //                         </div>
    //                         {{/if}}
    //                     </div>
    //                     <div class="form-group">
    //                         <label class="control-label" for="fullname">Fullname</label>
    //                         <div class="input-wrap">
    //                             <input type="text" name="fullname" class="form-control" id="fullname"
    //                                 value="{{infor.fullname}}" placeholder="Fullname">
    //                             <span class="help-block"></span>
    //                         </div>
    //                     </div>
    //                     <div class="form-group">
    //                         <label class="control-label" for="username">Username</label>
    //                         <div class="input-wrap">
    //                             <input type="text" name="username" class="form-control" id="username"
    //                                 value="{{infor.name}}" placeholder="Username" disabled="">
    //                             <span class="help-block"></span>
    //                         </div>
    //                     </div>
    //                     <div class="form-group row">
    //                         <label class="control-label col-2" for="rating">Rating</label>
    //                         <div class="input-wrap col-3">
    //                             <input type="text" name="rating" class="form-control" id="rating"
    //                                 value="{{infor.rating}}/10" placeholder="Rating" disabled="">
    //                         </div>
    //                         <div class="col-3">
    //                             <a class="btn btn-warning" href="/account/review">Review List</a>
    //                         </div>
    //                     </div>
    //                     <div class="form-group">
    //                         <label class="control-label" for="email">Email</label>
    //                         <div class="input-wrap">
    //                             <input type="email" value="{{infor.email}}" class="form-control" name="email"
    //                                 id="form_email" placeholder="Email">
    //                         </div>
    //                     </div>
    //                     <div class="form-group">
    //                         <label class="control-label" for="address">Address</label>
    //                         <div class="input-wrap">
    //                             <textarea type="address" class="form-control" name="address" id="address"
    //                                 placeholder="Address" rows="3">{{infor.address}}</textarea>
    //                         </div>
    //                     </div>
    //                     <div class="form-group ">
    //                         <label class="control-label no-lh" for="birthdate">
    //                             Birthday
    //                         </label>
    //                         <div class="input-wrap">
    //                             <fieldset class="birthday-picker ml-3">
    //                                 <div class="row">
    //                                     <select class="birth-day form-control col-3" name="birth[day]">
    //                                         {{#each total_day.total_date}}
    //                                         <option value="{{date}}" {{#if isSelected}} selected="selected" {{/if}}>
    //                                             {{date}}
    //                                         </option>
    //                                         {{/each}}
    //                                     </select>
    //                                     <select class="birth-month form-control col-3" name="birth[month]">
    //                                         {{#each total_day.total_month}}
    //                                         <option value="{{month}}" {{#if isSelected}} selected="selected" {{/if}}>
    //                                             {{month}}</option>
    //                                         {{/each}}
    //                                     </select>
    //                                     <select class="birth-year form-control col-3" name="birth[year]">
    //                                         {{#each total_day.total_year}}
    //                                         <option value="{{year}}" {{#if isSelected}} selected="selected" {{/if}}>
    //                                             {{year}}
    //                                         </option>
    //                                         {{/each}}
    //                                     </select>
    //                                 </div>
    //                             </fieldset>
    //                         </div>
    //                     </div>

    //                     <div class="form-group">
    //                         <div class="input-wrap margin">
    //                             <label class="checkbox">
    //                                 <input type="checkbox" id="is_change_pass" name="is_change_pass" value="checked">
    //                                 Change password?
    //                             </label>
    //                         </div>
    //                     </div>
    //                     <div class="password-group">
    //                         <div class="form-group">
    //                             <label class="control-label" for="old_password">Current password</label>
    //                             <div class="input-wrap">
    //                                 <input type="password" name="old_password" class="form-control" id="old_password"
    //                                     value="" autocomplete="off" placeholder="Current password">
    //                                 <span class="help-block"></span>
    //                             </div>

    //                         </div>

    //                         <div class="form-group">
    //                             <label class="control-label" for="new-password">New password</label>
    //                             <div class="input-wrap">
    //                                 <input type="password" name="new_password" class="form-control" id="new_password"
    //                                     value="" autocomplete="off" placeholder="New password">
    //                                 <span class="help-block"></span>
    //                             </div>
    //                         </div>

    //                         <div class="form-group">
    //                             <label class="control-label" for="re_new_password">Confirm new password</label>
    //                             <div class="input-wrap">
    //                                 <input type="password" name="re_new_password" class="form-control"
    //                                     id="re_new_password" value="" autocomplete="off"
    //                                     placeholder="Confirm new password">
    //                                 <span class="help-block"></span>
    //                             </div>
    //                         </div>

    //                     </div>
    //                     <div class="form-group">
    //                         <button type="submit" class="btn btn-primary btn-block btn-update">Save</button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="float-right"><a class="btn btn-danger" href="/account/signout">Sign out</a></div>
    // </div>


    )
}
