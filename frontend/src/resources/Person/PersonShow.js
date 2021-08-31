import React from 'react';
import { TextField, UrlField } from 'react-admin';
import { Hero, Show, SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';
import SubList from "../../layout/DefaultLayout/TreeMenu/SubMenu";
import ContactField from "../../contact/ContactField";


const PersonShow = (props) => (
  <Show title={<PersonTitle />} {...props}>
    <>
      <Hero>
        <TextField source="pair:label" />
        <ReferenceArrayField reference="Type" source="pair:hasType">
          <SeparatedListField linkType={false}>
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
        <ContactField source="pair:e-mail" />
        <UrlField source="pair:aboutPage" />
      </Hero>
      <SubList label="Pratique">
        <ReferenceField reference="Place" source="pair:hasLocation" linkType="show">
          <TextField source="pair:label" />
        </ReferenceField>
      </SubList>
      <SubList label="Communauté">
        <UrlField source="pair:webPage" fullWidth />
      </SubList>
    </>
  </Show>
);

export default PersonShow;
