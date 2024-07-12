import { Modal } from 'antd';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { userService } from 'src/services';

import {
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_SERVICE_PRIVATE_KEY,
  LETS_CONNECT_SHEET_ID,
  SPREADSHEET_ID
} from '@/utils/constants/app_config';

import { PrimaryGradientButton } from '../Buttons';
import OrganisationOnboarding from '../OnBoarding/OrganisationOnboarding';
import SuccessModal from '../SuccessModal';
import countries from './countries.json';
import StyledStudioModal from './StyledStudioModal';

function StudioModal({
  isModal = false,
  onClose,
  onSubmit,
  showCountry = true
}) {
  const allCountries = countries.map(e => {
    return { value: e.code, label: e.name };
  });

  const [submitBtnActive, setSubmitBtnActive] = useState(false);
  const [preference, setPreference] = useState({
    fname: '',
    lname: '',
    about: '',
    email: '',
    otherInfo: {
      companyName: '',
      website: '',
      phNumber: ''
    }
  });
  const [emailIdValid, setEmailIdValid] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  function handleOnErrorEmail(e) {
    let emailValid = e.toLowerCase().match(/\S+@\S+\.\S+/);
    setEmailIdValid(emailValid !== null);
    return false;
  }

  function onChangeInput(e) {
    e.target.name === 'fname' ||
    e.target.name === 'lname' ||
    e.target.name === 'about' ||
    e.target.name === 'email'
      ? setPreference({
          ...preference,
          [e.target.name]: e.target.value,
          otherInfo: {
            ...preference.otherInfo
          }
        })
      : setPreference({
          ...preference,
          otherInfo: {
            ...preference.otherInfo,
            [e.target.name]: e.target.value
          }
        });
  }

  function onOptionChangeCountries(country) {
    // eslint-disable-next-line no-console
    return setPreference({
      ...preference,
      otherInfo: {
        ...preference.otherInfo,
        country: country
      }
    });
  }

  const handleSuccessModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const appendSpreadsheet = async row => {
    try {
      await doc.useServiceAccountAuth({
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n')
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      // eslint-disable-next-line security/detect-object-injection
      const sheet = doc.sheetsById[LETS_CONNECT_SHEET_ID];
      await sheet.addRow(row);

      setPreference({
        fname: '',
        lname: '',
        about: '',
        otherInfo: {
          companyName: '',
          website: '',
          country: ''
        }
      });

      onSubmit(true);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      preference?.fname?.length !== 0 &&
      preference?.lname?.length !== 0 &&
      preference?.otherInfo?.companyName !== 0 &&
      preference?.email?.length !== 0
    ) {
      // Data add for append
      const newRow = {
        Email: preference.email,
        FirstName: preference.fname,
        LastName: preference.lname,
        CompanyName: preference.otherInfo.companyName,
        Country: preference.otherInfo.country,
        Website: preference.otherInfo.website,
        About: preference.about
      };

      appendSpreadsheet(newRow);
    }

    await userService.letsConnectEmail(preference);

    handleSuccessModal();
    onClose();
  };

  useEffect(() => {
    preference?.fname?.length !== 0 &&
    preference?.lname?.length !== 0 &&
    preference?.otherInfo?.companyName !== 0 &&
    preference?.email?.length !== 0 &&
    emailIdValid
      ? // preference?.otherInfo?.website?.length !== 0
        setSubmitBtnActive(true)
      : setSubmitBtnActive(false);
  }, [preference]);
  return (
    <>
      <Modal
        visible={isModal}
        closable={false}
        className="onboardingModal"
        footer={null}
        bodyStyle={{ height: '100%' }}
        centered={true}
      >
        <StyledStudioModal>
          <div className="heading-modal">
            <h3>Cool! We just need a few more details</h3>
            <AiOutlineClose
              onClick={onClose}
              style={{
                position: 'absolute',
                right: '20px',
                top: '30px',
                cursor: 'pointer'
              }}
              fontSize={20}
            />
          </div>

          <OrganisationOnboarding
            showEmail={true}
            customStyle={{ width: '100%' }}
            onChangeInput={onChangeInput}
            preference={preference}
            allCountries={allCountries}
            onOptionChangeCountries={onOptionChangeCountries}
            showCountry={showCountry}
            handleOnErrorEmail={handleOnErrorEmail}
          />

          <div className="modalBtn">
            <PrimaryGradientButton
              text="Let's Connect"
              customClassname="submit-btn"
              onClick={handleSubmit}
              disabled={!submitBtnActive}
              allCountries={allCountries}
            />
          </div>
        </StyledStudioModal>
      </Modal>

      <SuccessModal
        isModalVisible={showSuccessModal}
        onClose={handleSuccessModal}
        title="Thank you! We will get back to you shortly"
      />
    </>
  );
}

export default StudioModal;
