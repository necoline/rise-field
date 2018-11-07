import { Container } from 'unstated';
import firebase from '../firebase';

export default class StandardContainer extends Container {
    state = {
        standards: [],
        standardHash: {}
    }

    fetchAllStandards = () => {
        const ref = firebase.database().ref('standard')
        const ids = []
        const hash = {}
        ref.once('value', snapshot => {
            snapshot.forEach(standard => {
                ids.push(standard.key) 
                hash[standard.key] = standard.val()
            })
            this.setState({ standards: ids, standardHash: hash })
        })
    }
    
    addStandard = (standard) => {
        const standardsRef = firebase.database().ref('standard');
        standardsRef.push(standard);
    };  


    // updateStandard = (standardId, standardDetails) => {
    //     const standardRef = firebase.database().ref(`/standard/${standardId}`);
    //     standardRef.update(standardDetails);
    // };

    selectors = {
        getAllStandards: () => this.state.standards || [],
        getStandardData: (id) => this.state.standardHash[id] || {}
    }

 }