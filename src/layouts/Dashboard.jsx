import { Route } from "react-router-dom";
import Navi from "./Navi";
import React from "react";
import { Container } from "semantic-ui-react";
import Footer from "./Footer";
import HomeLayout from "./HomeLayout";
import JobPostingLayout from "./JobPostingLayout";
import CandidateLayout from "./CandidateLayout";
import EmployerLayout from "./EmployerLayout";
import AboutUsLayout from "./AboutUsLayout";
import JobPostingDetail from "./../pages/JobPostingDetail";
import CandidateDetail from "./../pages/CandidateDetail";
import EmployerDetail from "./../pages/EmployerDetail";
import JobPostingAdd from "./../pages/JobPostingAdd";
import CandidateAdd from "./../pages/CandidateAdd";
import EmployerAdd from "./../pages/EmployerAdd";
import ResumeDetailsEdit from "./../pages/ResumeDetailsEdit";
import LinkAdd from "./../pages/LinkAdd";
import CoverLetterAdd from "./../pages/CoverLetterAdd";
import EducationAdd from "./../pages/EducationAdd";
import ExperienceAdd from "./../pages/ExperienceAdd";
import LanguageLevelAdd from "./../pages/LanguageLevelAdd";
import SkillAdd from "./../pages/SkillAdd";
import LinkDelete from "./../pages/LinkDelete";
import CoverLetterEdit from "./../pages/CoverLetterEdit";
import EducationDelete from "./../pages/EducationDelete";
import ExperienceDelete from "./../pages/ExperienceDelete";
import LanguageLevelDelete from "./../pages/LanguageLevelDelete";
import SkillDelete from "./../pages/SkillDelete";
import CandidateUpdate from "./../pages/CandidateUpdate";
import EmployerUpdate from "./../pages/EmployerUpdate";
import FavoriteJobPostingLayout from "./FavoriteJobPostingLayout";
import AdminLayout from "./adminLayouts/AdminLayout";
import CompanyPersonnelAdd from "./../pages/adminPages/CompanyPersonnelAdd";
import CompanyPersonnelUpdate from "./../pages/adminPages/CompanyPersonnelUpdate";
import AppDetailsEdit from "./../pages/adminPages/AppDetailsEdit";
import CityAdd from "./../pages/adminPages/CityAdd";
import CityUpdate from "./../pages/adminPages/CityUpdate";
import JobTitleAdd from "./../pages/adminPages/JobTitleAdd";
import JobTitleUpdate from "./../pages/adminPages/JobTitleUpdate";
import LanguageAdd from "./../pages/adminPages/LanguageAdd";
import LanguageUpdate from "./../pages/adminPages/LanguageUpdate";
import LevelAdd from "./../pages/adminPages/LevelAdd";
import LevelUpdate from "./../pages/adminPages/LevelUpdate";
import LinkNameAdd from "./../pages/adminPages/LinkNameAdd";
import LinkNameUpdate from "./../pages/adminPages/LinkNameUpdate";
import WorkingTimeAdd from "./../pages/adminPages/WorkingTimeAdd";
import WorkingTimeUpdate from "./../pages/adminPages/WorkingTimeUpdate";
import WorkingTypeAdd from "./../pages/adminPages/WorkingTypeAdd";
import WorkingTypeUpdate from "./../pages/adminPages/WorkingTypeUpdate";
import Confirm from "./../pages/adminPages/Confirm";
import { Routes } from "react-router-dom/dist";

export default function Dashboard() {
  return (
    <Container className="dashboard">
      <Navi />
      <Routes>
        <Route exact path="/" element={<HomeLayout />} />
        <Route exact path="home" element={<HomeLayout />} />
        <Route exact path="/jobPostings" element={<JobPostingLayout />} />
        <Route
          exact
          path="/jobPostings/jobPosting/:id"
          component={<JobPostingDetail />}
        />
        <Route exact path="/candidate/add" element={<CandidateAdd />} />
        <Route exact path="/candidates" element={<CandidateLayout />} />
        <Route
          exact
          path="/candidates/candidate/:id"
          element={<CandidateDetail />}
        />
        <Route
          exact
          path="/candidates/candidate/:id/update"
          element={<CandidateUpdate />}
        />
        <Route
          exact
          path="/candidates/candidate/:id/favoriteJobPostings"
          element={<FavoriteJobPostingLayout />}
        />
        <Route
          exact
          path="/candidates/resume/:id/edit"
          element={<ResumeDetailsEdit />}
        />
        <Route
          exact
          path="/candidates/resume/:id/link/add"
          element={<LinkAdd />}
        />
        <Route
          exact
          path="/candidates/resume/:id/link/delete"
          element={<LinkDelete />}
        />
        <Route
          exact
          path="/candidates/candidate/:id/coverLetter/add"
          element={<CoverLetterAdd />}
        />
        <Route
          exact
          path="/candidates/candidate/:id/coverLetter/edit"
          element={<CoverLetterEdit />}
        />
        <Route
          exact
          path="/candidates/resume/:id/education/add"
          element={<EducationAdd />}
        />
        <Route
          exact
          path="/candidates/resume/:id/education/delete"
          element={<EducationDelete />}
        />
        <Route
          exact
          path="/candidates/resume/:id/experience/add"
          element={<ExperienceAdd />}
        />
        <Route
          exact
          path="/candidates/resume/:id/experience/delete"
          element={<ExperienceDelete />}
        />
        <Route
          exact
          path="/candidates/resume/:id/languageLevel/add"
          element={<LanguageLevelAdd />}
        />
        <Route
          exact
          path="/candidates/resume/:id/languageLevel/delete"
          element={<LanguageLevelDelete />}
        />
        <Route
          exact
          path="/candidates/resume/:id/skill/add"
          element={<SkillAdd />}
        />
        <Route
          exact
          path="/candidates/resume/:id/skill/delete"
          element={<SkillDelete />}
        />
        <Route exact path="/employer/add" element={<EmployerAdd />} />
        <Route exact path="/employers" element={<EmployerLayout />} />
        <Route
          exact
          path="/employers/:type/:id/"
          element={<EmployerDetail />}
        />
        <Route
          exact
          path="/employers/employer/:id/update"
          element={<EmployerUpdate />}
        />
        <Route
          exact
          path="/employers/employer/:id/jobPosting/add"
          element={<JobPostingAdd />}
        />
        <Route exact path="/aboutUs" element={<AboutUsLayout />} />

        <Route exact path="/adminPanel" element={<AdminLayout />} />
        <Route
          exact
          path="/adminPanel/companyPersonnel/add"
          element={<CompanyPersonnelAdd />}
        />
        <Route
          exact
          path="/adminPanel/companyPersonnel/:id/update"
          element={<CompanyPersonnelUpdate />}
        />
        <Route
          exact
          path="/adminPanel/companyPersonnel/:id/confirm"
          element={<Confirm />}
        />
        <Route exact path="/adminPanel/edit" element={<AppDetailsEdit />} />
        <Route exact path="/adminPanel/edit/city/add" element={<CityAdd />} />
        <Route
          exact
          path="/adminPanel/edit/city/update"
          element={<CityUpdate />}
        />
        <Route
          exact
          path="/adminPanel/edit/jobTitle/add"
          element={<JobTitleAdd />}
        />
        <Route
          exact
          path="/adminPanel/edit/jobTitle/update"
          element={<JobTitleUpdate />}
        />
        <Route
          exact
          path="/adminPanel/edit/language/add"
          element={<LanguageAdd />}
        />
        <Route
          exact
          path="/adminPanel/edit/language/update"
          element={<LanguageUpdate />}
        />
        <Route exact path="/adminPanel/edit/level/add" element={<LevelAdd />} />
        <Route
          exact
          path="/adminPanel/edit/level/update"
          element={<LevelUpdate />}
        />
        <Route
          exact
          path="/adminPanel/edit/linkName/add"
          element={<LinkNameAdd />}
        />
        <Route
          exact
          path="/adminPanel/edit/linkName/update"
          element={<LinkNameUpdate />}
        />
        <Route
          exact
          path="/adminPanel/edit/workingTime/add"
          element={<WorkingTimeAdd />}
        />
        <Route
          exact
          path="/adminPanel/edit/workingTime/update"
          element={<WorkingTimeUpdate />}
        />
        <Route
          exact
          path="/adminPanel/edit/workingType/add"
          element={<WorkingTypeAdd />}
        />
        <Route
          exact
          path="/adminPanel/edit/workingType/update"
          element={<WorkingTypeUpdate />}
        />
      </Routes>

      <Footer />
    </Container>
  );
}
