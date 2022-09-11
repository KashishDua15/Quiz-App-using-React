import { useHistory } from "react-router";

const Instructions = ()=> {

    const history = useHistory();
const continueBtn = () =>{
    history.push("/quiz");

}
    return(
        <>
        <div class="info-box">
            <div class="info-title">
              <span>Some Important Rules of this Intuitive Quiz Hub</span>
            </div>
            <div class="info-list">
              <div class="info">
                1. You will have only  <span>5 mintutes</span> to complete this quiz.
              </div>
              <div class="info">
                2. You can't exit the quiz while you are playing.
              </div>
              <div class="info">
              3.You will get points on the basis of your correct answers.
              </div>
              <div class="info">
              4. Please fill all the details correctly.
              </div>
              <div class="info">
               5. Once you submitted the paper your final score will be dispalyed.
              </div>
              <div class="buttons">
                <button class="quit">Exit Quiz</button>
                <button class="restart" onClick={continueBtn}>Continue</button>
              </div>
            </div>
            
          </div>

                  </>            
    )
};
export default Instructions;