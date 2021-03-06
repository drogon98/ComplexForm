import React from "react";
import TextInputUtility from "../TextInputUtility.js";
import SelectInputUtility from "../SelectInputUtility.js";

export default class AccountInformation extends React.Component {
	render() {
		return (
			<div className="w-100 mt-5">
				<h5 className="mb-4">Account Information</h5>
				<form className="form-group">
					<TextInputUtility
						label="Email"
						name="email"
						type="email"
						hasSecondaryTest
						secodaryText="(Your email will be your username)"
						handleChange={this.props.handleChange}
					/>
					<TextInputUtility
						label="Re-type Email"
						name="emailConfirm"
						type="email"
						handleChange={this.props.handleChange}
					/>
					<TextInputUtility
						label="Password"
						name="password"
						type="password"
						hasSecondaryTest
						secodaryText="(Min. 8 characters, 1 number, case-sensitive)"
						handleChange={this.props.handleChange}
					/>
					<TextInputUtility
						label="Re-type Password"
						name="passwordConfirm"
						type="password"
						handleChange={this.props.handleChange}
					/>
					<SelectInputUtility
						label="Security Question"
						name="securityQuestion"
						options={[
							"Choose a security question",
							"What is your fifth name?",
							"Why do you live?",
							"Where did you first meet your spouse?",
							"What is your last name?",
						]}
						handleChange={this.props.handleChange}
					/>
					<TextInputUtility
						label="Security Answer"
						name="securityAnswer"
						hasSecondaryTest
						secodaryText="(Not case-sensitive)"
						handleChange={this.props.handleChange}
					/>
				</form>
			</div>
		);
	}
}
