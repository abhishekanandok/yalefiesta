import styles from "./signup.module.css";
import SignupForm from "@/components/signupForm/signupForm";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SignupForm/>
      </div>
    </div>
  );
};

export default SignupPage;
