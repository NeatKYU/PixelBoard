import { useState, useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";

interface CanvasProps {
  width: number;
  height: number;
}

export const Canvas = (props: CanvasProps) => {
  const { width, height } = props;
  const [board, setBoard] = useState(create2DArray(height, width));
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxTileSize = 40;

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
      setContainerHeight(containerRef.current.clientHeight);
    }
  }, []);

  // width resize
  useEffect(() => {
    function handleWindowResize() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
        setContainerHeight(containerRef.current.clientHeight);
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const boardWidth =
    width >= height ? containerWidth / width : containerHeight / height;
  const boardHeight =
    width >= height ? containerWidth / height : containerHeight / height;

  return (
    <Conatiner ref={containerRef}>
      <Wrapper style={{ justifyContent: width < height ? "center" : "" }}>
        {board.map((v) => {
          return (
            <div
              style={{
                width: "100%",
                height: boardWidth + "px",
                maxHeight: maxTileSize + "px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {v.map(() => {
                return <Pixel width={boardWidth} maxSize={maxTileSize} />;
              })}
            </div>
          );
        })}
      </Wrapper>
    </Conatiner>
  );
};

function create2DArray(x: number, y: number) {
  const newArr = [];
  for (let i = 0; i < x; i++) {
    newArr[i] = new Array(y).fill(0);
  }
  return newArr;
}

const Conatiner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2a2a2a;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Pixel = styled.div<{ width: number; maxSize: number }>`
  max-width: ${({ maxSize }) => maxSize + "px"};
  max-height: ${({ maxSize }) => maxSize + "px"};
  width: ${({ width }) => width + "px"};
  height: ${({ width }) => width + "px"};

  background-color: aliceblue;
  border: 0.5px solid;
`;
