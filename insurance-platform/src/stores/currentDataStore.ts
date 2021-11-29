import { observable, action } from 'mobx';
import { createContext, useContext } from 'react';
import { draftFormValues, FormValues, Status } from '../models/models';
import UserStore from './userStore';

class CurrentDataStore {
  @observable id = '';
  @observable companyName = '';
  @observable address = '';
  @observable annualRevenue = 0;
  @observable status = Status.NEW;
  @observable signedApplication = '';
  @observable submittedBy = '';

  @observable submissionsToUpdate = draftFormValues;

  @observable allSubmissions: FormValues[] = [];

  @action
  setData(data) {
    this.id = data.id;
    this.companyName = data.companyName;
    this.address = data.address;
    this.annualRevenue = data.annualRevenue;
    this.status = data.status;
    this.signedApplication = data.signedApplication;
    this.submittedBy = data.submittedBy;
  }

  @action
  createOrUpdateNewSubmission = async (data) => {
    if (this.allSubmissions.some((submission) => submission.id === data.id)) {
      this.allSubmissions.forEach((element, index) => {
        if (element.id === data.id) {
          this.allSubmissions[index] = data;
        }
      });
    } else {
      this.allSubmissions.push({
        id: data.id,
        companyName: data.companyName,
        address: data.address,
        annualRevenue: data.annualRevenue,
        status: data.status,
        signedApplication: data.signedApplication,
        submittedBy: data.submittedBy,
      });
    }
    await fetch('http://localhost:4000/updateAllSubmissions  ', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(this.allSubmissions),
    }).then((res) => res.json());
  };

  @action deleteSubmission = async (id) => {
    this.allSubmissions = this.allSubmissions.filter((submissions) => submissions.id !== id);

    await fetch('http://localhost:4000/updateAllSubmissions  ', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(this.allSubmissions),
    }).then((res) => res.json());

    this.clearCurrentSubmission();
  };

  @action getCurrentSubmission = () => {
    return {
      id: this.id,
      companyName: this.companyName,
      address: this.address,
      annualRevenue: this.annualRevenue,
      status: this.status,
      signedApplication: this.signedApplication,
      submittedBy: this.submittedBy,
    };
  };

  @action getAllSubmissions = async () => {
    const all = await fetch('http://localhost:4000/getAllSubmissions', {
      method: 'GET',
    }).then((res) => {
      return res.json();
    });
    if (all.status === false) return false;
    else return (this.allSubmissions = all.allSubmissions);
  };

  @action clearCurrentSubmission = () => {
    this.id = draftFormValues.id;
    // this.companyName = draftFormValues.companyName;
    // this.address = draftFormValues.address;
    // this.annualRevenue = draftFormValues.annualRevenue;
    this.status = draftFormValues.status;
    this.signedApplication = draftFormValues.signedApplication;
    // this.submittedBy = draftFormValues.submittedBy;
  };

  @action uploadFile = async (fullName, fileName, formData) => {
    return await fetch(`http://localhost:4000/picture:${fullName}?path=${this.id}&fileName=${fileName}`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        console.log('e= ', res);
        return res.status;
      })
      .catch((er) => {
        console.log('heerere');
      });
  };
}

export default createContext(new CurrentDataStore());
