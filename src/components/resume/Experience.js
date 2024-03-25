import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Data Engineer"         
            subTitle="IPSOS - ( Jan 2023– Present)"
            result="India"
            des="Transformed the data landscape for multiple AWS based clients by building end to end enterprise big data ingestion and
            processing solutions using PySpark and SQL complex transformations and DQM validations.
            • Significantly contributed to Data modelling, STTM (source to target mapping), design documents for all client projects to
            ensure highest quality of deliverables.
            • Spearheaded the seamless transition of traditional on-premises ETL/ELT pipelines to AWS cloud infrastructure;
            Implemented EMR for compute, RDS for audit, and Airflow for orchestration, resulting in a 30% increase in data
            processing efficiency.
            • Improved big data analysis with Amazon Redshift, streamlining processes, and enhancing business strategies by 15%.
            Deployed Azure Data Factory for efficient ETL, integrating diverse data into S3, and reducing manual interventions,
            resulting in a 20% reduction. "
          />
          <ResumeCard
            title="Data Science - Intern "
            subTitle="Argus Systems - Aug 2022– Jan 2023"
            result="India "
            des=" Deployed a text classification model using Flask to assign IT support tickets to their respective groups, achieving an
            accuracy of 81%, an F-score of 0.8, and reducing response time by 50%.
            • Implemented automation for Excel tasks, significantly contributing to a 20% reduction in the overall project timeline.
            • Led exploratory data analysis for the Customs Risk Engine and played a pivotal role in crafting SQL queries, resulting in a
            20% improvement in data quality."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Rinex Technologies  - (May 2022– Jul 2022)"
            result="India"
            des=" Implemented 3 innovative functionalities for the profile section, enhancing user experience by 20%.
            • Developed comprehensive test cases for the existing codebase to ensure robustness and reliability.
            • Contributed over 500 lines of high-quality code to an established codebase through version control with Git.
            • Utilized data visualization techniques to illustrate GitHub collaboration patterns effectively."
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Experience;
