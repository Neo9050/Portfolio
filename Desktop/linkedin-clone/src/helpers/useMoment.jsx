import moment from "moment/moment";

//momentjs from google is used to 
//install the dependency for timestamp display
export const getCurrentTimeStamp = (timeformat) => {
   return moment().format(timeformat);
};