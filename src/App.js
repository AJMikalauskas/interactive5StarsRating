// import logo from './logo.svg';
// outline star and filled star images
// import outlineStar from "./img/outline-star.png";
// import filledStar from "./img/golden-filled-star.png";
import outlineBlackStar from "./img/outline-black-star.png";
//import halfFilledBlackStar from "./img/half-filled-black-star.png";
import testHalf from "./img/half-filled-black-star-2.png";
import filledBlackStar from "./img/black-filled-star.png";
import Layout from "./components/Layout/Layout";
import classes from './App.module.css';
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Stack, Button, ImageList, ImageListItem,  } from "@mui/material";
import { useEffect, useRef, useState } from "react";
// Create table with rating stars with mui
function App() {
  // set State for mouse position
  const [mousePosX, setMousePosX] = useState();
  //const [mousePosY, setMousePosY] = useState();

  // Make dynamic based on page size -> 5 stars with 5 refs
   const firstStarRef = useRef();
   const [firstStarLeftBtnBorder, setFirstStarLeftBtnBorder] = useState();
   const [firstStarWithOffsetLeftAndWidth, setFirstStarWithOffsetLeftAndWidth] = useState();

   // 2nd star
   const secondStarRef = useRef();
   const [secondStarLeftBtnBorder, setSecondStarLeftBtnBorder] = useState();
   const [secondStarWithOffsetLeftAndWidth, setSecondStarWithOffsetLeftAndWidth] = useState();

   // 3rd star
   const thirdStarRef = useRef();
   const [thirdStarLeftBtnBorder, setThirdStarLeftBtnBorder] = useState();
   const [thirdStarWithOffsetLeftAndWidth, setThirdStarWithOffsetLeftAndWidth] = useState();

   // 4th star
   const fourthStarRef = useRef();
   const [fourthStarLeftBtnBorder, setFourthStarLeftBtnBorder] = useState();
   const [fourthStarWithOffsetLeftAndWidth, setFourthStarWithOffsetLeftAndWidth] = useState();

   // 5th star
   const fifthStarRef = useRef();
   const [fifthStarLeftBtnBorder, setFifthStarLeftBtnBorder] = useState();
   const [fifthStarWithOffsetLeftAndWidth, setFifthStarWithOffsetLeftAndWidth] = useState();

   //const firstStarLeftnBtnBorder = firstStarRef.current.offsetLeft;
   //const testInputRef =useRef();
  //  const [x, setX] = useState();
  //  const [y, setY] = useState();

  //  const getPosition = () => {
  //    //const lol = firstImgRef.current.value;
  //    const x1 = firstImgRef.current.offsetLeft();
  //    setX(x1);

  //    const y1 = firstImgRef.current.offsetTop();
  //    setY(y1);
  //  };
  //  useEffect(() => {
  //    getPosition();
  //    console.log(x);
  //    console.log(y);
  //  })

  // Can only point to this function, every time useEffect()/window event listener is called the component rerenders
    // if you call the function in onClick as rateStarsHandler(), the function is actually called  every time the component rerenders
      // if you only use rateStarsHandler, it only points to the function which will be called once onclick event happens
        // anonymous function acts as the way to call a function with params when something is onclicked -> anonymous function may 
          // also just act as a pointer, and will be called when onClick event is called 
  const rateStarsHandler = (refValue, mousePosX) => {
    switch (refValue) {
        case fifthStarLeftBtnBorder : {
          // run ternary in one stament and console.log()
            const starRating = mousePosX > fifthStarWithOffsetLeftAndWidth ? "5 stars" : "4.5 stars";
            console.log(starRating);
            break;
        }
        case fourthStarLeftBtnBorder : {
            // run ternary in one stament and console.log()
          const starRating = mousePosX > fourthStarWithOffsetLeftAndWidth ? "4 stars" : "3.5 stars";
          console.log(starRating);
          break;
        }
        case thirdStarLeftBtnBorder : {
          // run ternary in one stament and console.log()
        const starRating = mousePosX > thirdStarWithOffsetLeftAndWidth ? "3 stars" : "2.5 stars";
        console.log(starRating);
        break;
      }
      case secondStarLeftBtnBorder : {
        // run ternary in one stament and console.log()
      const starRating = mousePosX > secondStarWithOffsetLeftAndWidth ? "2 stars" : "1.5 stars";
      console.log(starRating);
      break;
    }
    case firstStarLeftBtnBorder : {
      // run ternary in one stament and console.log()
    const starRating = mousePosX > firstStarWithOffsetLeftAndWidth ? "1 stars" : "0.5 stars";
    console.log(starRating);
    break;
  }
    default: {
      console.log("Should nver hit ");
      break;
    }
    }
  }
  useEffect(() => {
    //console.log(testInputRef.current.value);
    //console.log(testInputRef);
    const update = (e) => {
      setMousePosX(e.x);
      //setMousePosY(e.y);
      //console.log(firstStarRef.current.offsetLeft);
    }
    window.addEventListener('mousemove', update);
    setFirstStarLeftBtnBorder(firstStarRef.current.offsetLeft);
    setFirstStarWithOffsetLeftAndWidth(firstStarRef.current.offsetLeft + (firstStarRef.current.offsetWidth/2));
    // 2nd star
    setSecondStarLeftBtnBorder(secondStarRef.current.offsetLeft);
    setSecondStarWithOffsetLeftAndWidth(secondStarRef.current.offsetLeft + (secondStarRef.current.offsetWidth/2));
    // 3rd star
    setThirdStarLeftBtnBorder(thirdStarRef.current.offsetLeft);
    setThirdStarWithOffsetLeftAndWidth(thirdStarRef.current.offsetLeft + (thirdStarRef.current.offsetWidth/2));
    // 4th star
    setFourthStarLeftBtnBorder(fourthStarRef.current.offsetLeft);
    setFourthStarWithOffsetLeftAndWidth(fourthStarRef.current.offsetLeft + (fourthStarRef.current.offsetWidth/2));
    // 5th star
    setFifthStarLeftBtnBorder(fifthStarRef.current.offsetLeft);
    setFifthStarWithOffsetLeftAndWidth(fifthStarRef.current.offsetLeft + (fifthStarRef.current.offsetWidth/2));
    console.log(fifthStarRef.current.offsetLeft);
    // console.log(firstStarRef.current.offsetLeft + (firstStarRef.current.offsetWidth/2));
    // console.log(firstStarRef.current.offsetLeft);
    // console.log(firstStarRef.current.offsetWidth/2);
    // console.log(firstImgRef);
  },[])

  // const testFnCall = (param) =>
  // {
  //   console.log("test " + param);
  // }
  return (
    <Layout>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name of Feature</TableCell>
            <TableCell align="center">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
              Adding Functionality Stuff Name
              <div>x: {mousePosX}</div>
              {/* <div>y: {mousePosY}</div> */}
            </TableCell>
            <TableCell align="center">
              {/* <button className={classes.button}><img src={outlineStar} alt="outline star"/></button> */}
              {/* Need to add justifyContent and alignItems CSS classes equal to center, so the btn/img are aligned in center of table space   */}
              <Stack direction="row" alignItems="center" justifyContent="center">
                {/* <ImageList sx={{ width: 300, height: 100}} cols={5} rowHeight={50}> */}
                {/* rateStarsHandler(firstStarLeftBtnBorder,mousePosX)} */}
              <Button className={classes.button} variant="text" ref={firstStarRef} onClick={() => {rateStarsHandler(firstStarLeftBtnBorder,mousePosX)}}><img src={ 
                mousePosX < firstStarLeftBtnBorder  ?  outlineBlackStar : mousePosX <= firstStarWithOffsetLeftAndWidth && mousePosX >= firstStarLeftBtnBorder  ? testHalf : mousePosX > firstStarWithOffsetLeftAndWidth ? filledBlackStar : outlineBlackStar
                } alt="filled star"/></Button>
              <Button className={classes.button} variant="text" ref={secondStarRef} onClick={() => {rateStarsHandler(secondStarLeftBtnBorder,mousePosX)}}><img src={
                mousePosX < secondStarLeftBtnBorder  ?  outlineBlackStar : mousePosX <= secondStarWithOffsetLeftAndWidth && mousePosX >= secondStarLeftBtnBorder  ? testHalf : mousePosX > secondStarWithOffsetLeftAndWidth ? filledBlackStar : outlineBlackStar
              } alt="filled star"/></Button>
              <Button className={classes.button} variant="text" ref={thirdStarRef} onClick={() => {rateStarsHandler(thirdStarLeftBtnBorder,mousePosX)}}><img src={
                 mousePosX < thirdStarLeftBtnBorder  ?  outlineBlackStar : mousePosX <= thirdStarWithOffsetLeftAndWidth && mousePosX >= thirdStarLeftBtnBorder  ? testHalf : mousePosX > thirdStarWithOffsetLeftAndWidth ? filledBlackStar : outlineBlackStar
              } alt="filled star"/></Button>
              <Button className={classes.button} variant="text" ref={fourthStarRef} onClick={() => {rateStarsHandler(fourthStarLeftBtnBorder,mousePosX)}}><img src={
                  mousePosX < fourthStarLeftBtnBorder  ?  outlineBlackStar : mousePosX <= fourthStarWithOffsetLeftAndWidth && mousePosX >= fourthStarLeftBtnBorder  ? testHalf : mousePosX > fourthStarWithOffsetLeftAndWidth ? filledBlackStar : outlineBlackStar
              } alt="filled star"/></Button>
              <Button className={classes.button} variant="text" ref={fifthStarRef} onClick={() => {rateStarsHandler(fifthStarLeftBtnBorder,mousePosX)}}><img src={
                  mousePosX < fifthStarLeftBtnBorder  ?  outlineBlackStar : mousePosX <= fifthStarWithOffsetLeftAndWidth && mousePosX >= fifthStarLeftBtnBorder  ? testHalf : mousePosX > fifthStarWithOffsetLeftAndWidth ? filledBlackStar : outlineBlackStar
              } alt="filled star"/></Button>
              {/* <ImageListItem key="img2"><Button className={classes.button} variant="text"><img src={filledStar} alt="filled star"/></Button></ImageListItem>
              <ImageListItem key="img3"><Button className={classes.button} variant="text"><img src={filledStar} alt="filled star"/></Button></ImageListItem>
              <ImageListItem key="img4"><Button className={classes.button} variant="text"><img src={filledStar} alt="filled star"/></Button></ImageListItem>
              <ImageListItem key="img5"><Button className={classes.button} variant="text"><img src={filledStar} alt="filled star"/></Button></ImageListItem>
              </ImageList> */}
              </Stack>
              {/* <img src={filledStar}/> */}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
    </Layout>
  );
}

export default App;
