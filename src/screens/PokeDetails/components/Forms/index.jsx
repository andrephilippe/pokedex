import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import {
    Scaffold,
    Title,
    Form
} from './styles';

const Forms = ({ forms }) => {
    const { t } = useTranslation();

    const getFormName = useCallback(form => (
        form.form_names.find(({ language }) => language.name === i18n.language)
    ), []);

    return (
        <Scaffold>
            <Title>{t('pokeDetails.forms')}</Title>
            {forms.map(({ form }) => {
                return (
                    <Form key={form.name}>
                        <Form.Name>
                            {getFormName(form)?.name || t('pokeDetails.defaultForm')}
                        </Form.Name>
                    </Form>
                );
            })}
        </Scaffold>
    );
};

Forms.propTypes = {
    forms: PropTypes.array.isRequired
};

export default Forms;
