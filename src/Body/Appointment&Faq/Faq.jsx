import React from 'react';
import { useState } from 'react';
// import "./faq.css"

const data = [
  {
    question: " Why Should I Choose NannySaysHQ",
    answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum/n     omnis magnam est cum perspiciatis voluptas eligendi maxime officia? Saepe hic similique ad eos corporis omnis, dolore velit temporamagnam ",
    
  },
  {
    question: " Why Should I Choose NannySaysHQ",
    answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum/n     omnis magnam est cum perspiciatis voluptas eligendi maxime officia? Saepe hic similique ad eos corporis omnis, dolore velit temporamagnam ",

  },
  {
    question: " Why Should I Choose NannySaysHQ",
    answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum/n     omnis magnam est cum perspiciatis voluptas eligendi maxime officia? Saepe hic similique ad eos corporis omnis, dolore velit temporamagnam ",

  },
  {
    question: " Why Should I Choose NannySaysHQ",
    answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum/n     omnis magnam est cum perspiciatis voluptas eligendi maxime officia? Saepe hic similique ad eos corporis omnis, dolore velit temporamagnam ",

  },
];

const Faq = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleQuestion = (index) => {
    if (expandedIndexes.includes(index)) {
       setExpandedIndexes(expandedIndexes.filter((i)=> i !== index))
    } else {
      setExpandedIndexes([...expandedIndexes, index])
     }
  //  console.log("working")
  }
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <p className="font-bold text-3xl ">Frequestly Asked Questions</p>

        {data.map((item, index) => (
          <div key={index} className="space-y-4 my-8 py-4 ">
            <div
              onClick={() => toggleQuestion(index)}
              className={`flex justify-between items-center border px-2 py-2 text-xl font-medium hover:text-green-700 ${
                expandedIndexes.includes(index)
                  ? "bg-green-800 text-white hover:disabled:"
                  : " "
              }`}
            >
              <h2>{item.question}</h2>
              <p>
                <i
                  className={`fa fa-angle-${
                    expandedIndexes.includes(index) ? "up" : "down"
                  } transition-transform ease-in-out duration-30000`}
                ></i>
              </p>
            </div>
            {expandedIndexes.includes(index) && (
              <div
                className={`bold transition-max-h overflow-hidden duration-300`}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq