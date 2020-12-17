import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    console.log(this.users);
    return html`
    <div>
      <li>${this.user.uname}</li>
      <li>${this.user.firstName}</li>
      <li>${this.user.lastName}</li>
    </div>

    <form action="api/updateUser.php", method="POST">
		<div>
			<label for="FirstName">first name</label>
			<input type="firstName" id="firstName" name="firstName" required>
    </div>
    <div>
			<label for="UserName">user name</label>
			<input type="uname" id="uname" name="uname" required>
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" id="oldpwd" name="oldpwd" required>
    </div>
    <div>
			<label for="newPassword">New Password</label>
			<input type="newPassword" id="pwd" name="pwd" required>
		</div>
		<button type="submit">Submit</button>
	  </form>
    `;
  }

}
customElements.define('edit-user', EditUser);
