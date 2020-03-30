import envalid from "envalid";

const { str, testOnly } = envalid;

export default envalid.cleanEnv(process.env, {
  STRIPE_API_KEY: str({
    desc: "A private Stripe API key",
    devDefault: testOnly("pk_test_2eY0aBwbzwIq4y3rWtbBg6b400Wuit4A61")
  })
}, {
  dotEnvPath: null
});
