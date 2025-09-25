import FormFields from "../auth/FormFields";
import FormFooter from "../auth/FormFooter";
import AuthFormHeader from "../auth/AuthFormHeader";
import ActionBtn from "../buttons/ActionBtn";
import useAuth from "../../hooks/useAuth";

const AuthForm = ({ type = "login" }) => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    isRegister,
    showPassword,
    setShowPassword,
    showConfirm,
    setShowConfirm,
  } = useAuth(type);

  return (
    <div className="max-w-[480px] mx-auto pt-[12px]">
      <AuthFormHeader isRegister={isRegister} />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-16 space-y-6">
        <FormFields
          isRegister={isRegister}
          register={register}
          errors={errors}
          watch={watch}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
        />
        <ActionBtn type="submit">
          {isRegister ? "Create Account" : "Login"}
        </ActionBtn>
      </form>

      <FormFooter isRegister={isRegister} />
    </div>
  );
};

export default AuthForm;
