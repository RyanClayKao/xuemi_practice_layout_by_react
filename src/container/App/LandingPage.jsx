import { StyledExploerButton } from "./App.styled";

export default function LandingPage() {
  return (
    <>
      <div className="content-title">Let's Get Cooking!</div>
      <div className="content-text">
        <div>Explore the best recipes from around thr world.</div>
        <div>Make cooking enjoyable again.</div>
      </div>
      <StyledExploerButton>Explore Recipes</StyledExploerButton>
    </>
  );
}
