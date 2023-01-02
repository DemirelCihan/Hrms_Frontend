import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, useParams } from "react-router-dom";
import CandidateService from "../services/candidateService";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { Button, Container, Grid, Label } from "semantic-ui-react";
import Headline from "./../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";

export default function CandidateUpdate() {
  let { id } = useParams();

  const [candidate, setCandidate] = useState({});
  const [open, setOpen] = useState(false);

  let candidateService = new CandidateService();

  useEffect(() => {
    candidateService
      .getById(id)
      .then((result) => setCandidate(result.data.data));
  }, []);

  const initialValues = {
    id: id,
    firstName: candidate.firstName,
    lastName: candidate.lastName,
    identityNumber: candidate.identityNumber,
    birthYear: candidate.birthYear,
    email: candidate.email,
    password: candidate.password,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    identityNumber: Yup.string().length(11, "Not 11 Characters in lenght"),
    birthYear: Yup.date(),
    email: Yup.string().email("Not a Valid a Email"),
    password: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log(values);
    candidateService.update(values);
    handleModal(true);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Update Candidate" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10" />
            <DateLabel value={new Date().toDateString()} />
            <Formik>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Input
                  name="firstName"
                  lable="First Name"
                  focus
                  placeholder={candidate.firstName}
                  onChange={(event, data) =>
                    handleChange("firstName", data.value)
                  }
                  value={formik.values.firstName}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <span>
                    <Label
                      basic
                      pointing
                      color="pink"
                      className="orbitron"
                      content={formik.errors.firstName}
                    />
                    <br />
                    <br />
                  </span>
                )}

                <Form.Input
                  name="lastName"
                  label="Last Name"
                  focus
                  placeholder={candidate.lastName}
                  onChange={(event, data) =>
                    handleChange("lastName", data.value)
                  }
                  value={formik.values.lastName}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <span>
                    <Label
                      basic
                      pointing
                      color="pink"
                      className="orbitron"
                      content={formik.errors.lastName}
                    />
                    <br />
                    <br />
                  </span>
                )}
                <Form.Group widths="equal">
                  <Form.Input
                    name="identityNumber"
                    label="Identity Number"
                    focus
                    placeholder={candidate.identityNumber}
                    onChange={(event, data) =>
                      handleChange("identityNumber", data.value)
                    }
                    value={formik.values.identityNumber}
                  />
                  <Form.Input
                    name="dateOfBirth"
                    label="Date of Birth"
                    focus
                    placeholder={candidate.dateOfBirth}
                    onChange={(event, data) =>
                      handleChange("dateOfBirth", data.value)
                    }
                    value={formik.values.dateOfBirth}
                  />
                </Form.Group>
                <Grid>
                  <Grid.Row columns="2">
                    <Grid.Column>
                      {formik.errors.identityNumber &&
                        formik.touched.identityNumber && (
                          <span>
                            <Label
                              basic
                              pointing
                              color="pink"
                              className="orbitron"
                              content={formik.errors.identityNumber}
                            />
                            <br />
                            <br />
                          </span>
                        )}
                    </Grid.Column>
                    <Grid.Column>
                      {formik.errors.dateOfBirth &&
                        formik.touched.dateOfBirth && (
                          <span>
                            <Label
                              basic
                              pointing
                              color="pink"
                              className="orbitron"
                              content={formik.errors.dateOfBirth}
                            />
                            <br />
                            <br />
                          </span>
                        )}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Form.Input
                  name="email"
                  label="E-mail"
                  focus
                  placeholder={candidate.email}
                  onChange={(event, data) => handleChange("email", data.value)}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <span>
                    <Label
                      basic
                      pointing
                      color="pink"
                      className="orbitron"
                      content={formik.errors.email}
                    />
                    <br />
                    <br />
                  </span>
                )}
                <Form.Input
                  name="password"
                  label="Password"
                  focus
                  placeholder="* * * * * *"
                  onChange={(event, data) =>
                    handleChange("password", data.value)
                  }
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && (
                  <span>
                    <Label
                      basic
                      pointing
                      color="pink"
                      className="orbitron"
                      content={formik.errors.password}
                    />
                    <br />
                    <br />
                  </span>
                )}
                <br />

                <Button
                  circular
                  fluid
                  type="submit"
                  color="yellow"
                  content="Update"
                  disabled={!formik.dirty}
                />
              </Form>
            </Formik>
          </Grid.Row>
        </Grid>

        <MessageModal
          onClose={() => handleModal(false)}
          onOpen={() => handleModal(true)}
          open={open}
          content="Updated"
        />
      </Container>
    </div>
  );
}
