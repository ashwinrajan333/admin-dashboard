import React from "react";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Header from "../../components/Header";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useColors } from "../../theme/colors";

const FAQQuestions = [
  {
    id: 1,
    question: "What is the purpose of this website?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam eos accusamus, itaque minus quod assumenda dolorem! Suscipit, aliquid excepturi id perspiciatis repellendus ex eius voluptate, recusandae ratione tempore inventore.",
  },
  {
    id: 2,
    question: "What is the purpose of this website?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam eos accusamus, itaque minus quod assumenda dolorem! Suscipit, aliquid excepturi id perspiciatis repellendus ex eius voluptate, recusandae ratione tempore inventore.",
  },
  {
    id: 3,
    question: "What is the purpose of this website?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam eos accusamus, itaque minus quod assumenda dolorem! Suscipit, aliquid excepturi id perspiciatis repellendus ex eius voluptate, recusandae ratione tempore inventore.",
  },
  {
    id: 4,
    question: "What is the purpose of this website?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam eos accusamus, itaque minus quod assumenda dolorem! Suscipit, aliquid excepturi id perspiciatis repellendus ex eius voluptate, recusandae ratione tempore inventore.",
  },
  {
    id: 5,
    question: "What is the purpose of this website?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam eos accusamus, itaque minus quod assumenda dolorem! Suscipit, aliquid excepturi id perspiciatis repellendus ex eius voluptate, recusandae ratione tempore inventore.",
  },
];

const FAQ = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const colors = useColors();
  return (
    <Box>
      <Header title="FAQ" subTitle="Frequently asked questions" />
      <Box
        height={matches ? "75vh" : "calc(100vh - 180px)"}
        sx={{ overflowY: "auto" }}
      >
        {FAQQuestions.map((question) => (
          <Accordion defaultExpanded key={question.id}>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
