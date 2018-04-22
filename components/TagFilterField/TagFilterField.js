import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { get_item_filters } from '../../redux/modules/items';
// import {get_item_filters} from

const TagFilterField = ({ tags, dispatch, selectedTags }) => {
    function handleFilter(value) {
        dispatch(get_item_filters(value));
    }
    return (
        <SelectField multiple hintText="Filter By Tag" onChange={(event, index, value) => handleFilter(value[0])}>
            {tags && tags.map((tag, index) => (
                <MenuItem
                    key={index}
                    value={tag}
                    primaryText={tag}
                    checked={selectedTags && selectedTags.indexOf(tag) >= 0}
                />
        ))}
        </SelectField>
    );
};
TagFilterField.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(TagFilterField);
