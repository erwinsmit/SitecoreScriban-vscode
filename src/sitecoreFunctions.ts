/*---------------------------------------------------------
 * Copyright (C) 2019 - Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

export const sitecoreFunctions = [
    {
        "name": "sc_field",
        "description": "Renders Sitecore Field",
        "validationRegEx": "",
        "template": "sc_field ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:FieldName}'",
        "pipeTemplate": "sc_field '${2:FieldName}'",
    },
    {
        "name": "sc_field",
        "description": "Renders Sitecore Field falling back to next field on the list if the previous one is empty",
        "validationRegEx": "",
        "template": "sc_field ${1|i_item,i_datasource,i_home,i_page,i_site|} ['${2:FieldName1}','${3:FieldName2}']",
        "pipeTemplate": "sc_field ['${2:FieldName1}','${3:FieldName2}']",
    },
    {
        "name": "sc_field",
        "description": "Renders Sitecore Field with added parameters to tags for e.g. image or link",
        "validationRegEx": "",
        "template": "sc_field ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:FieldName}' [['${3:data-attribute1}','${4:value1}'],['${5:data-attribute2}','${6:value2}']]",
        "pipeTemplate": "sc_field '${2:FieldName}' [['${3:data-attribute1}','${4:value1}'],['${5:data-attribute2}','${6:value2}']]",
    },
    {
        "name": "sc_decorate",
        "description": "Outputs component decoration with styles, grid classes and attributes needed by creative exchange",
        "validationRegEx": "",
        "template": "sc_decorate",
        "pipeTemplate": "sc_decorate",
    },
    {
        "name": "sc_decorate",
        "description": "Outputs component decoration with styles, grid classes and attributes needed by creative exchange",
        "validationRegEx": "",
        "template": "sc_decorate ['${1:css-class}']",
        "pipeTemplate": "sc_decorate",
    },
    {
        "name": "sc_translate",
        "description": "Translate a label to the language specified through the parameter using the site dictionary.",
        "validationRegEx": "",
        "template": "sc_translate '${1:phrase}' ${2:'optional-languagename'?}",
        "pipeTemplate": "sc_translate ${1:\"languagename\"}",
    },
    {
        "name": "sc_translate",
        "description": "Translate a label to the context language using the site dictionary.",
        "validationRegEx": "",
        "template": "sc_translate '${1:phrase}'",
        "pipeTemplate": "sc_translate",
    },
    {
        "name": "sc_editframe",
        "description": "Wrapping block for an edit frame",
        "validationRegEx": "",
        "template": ["{{ sc_editframe ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:FrameName}' }}",
        "$3",
        "{{ sc_endeditframe }}"],
        "pipeTemplate": "",
    },
    {
        "name": "sc_execute",
        "description": "Renders variant beneath the current script providing <__item__> to the pipeline",
        "validationRegEx": "",
        "template": "sc_execute ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:SubVariantName}'",
        "pipeTemplate": "sc_execute '${1:SubVariantName}'",
    },
    {
        "name": "sc_evaluate",
        "description": "Evaluates a rule stored in an item beneath the scriban script - allows specifying item for evaluation. Returns boolean value",
        "validationRegEx": "",
        "template": "sc_evaluate ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:Rule Name}'",
        "pipeTemplate": "sc_evaluate '${1:Rule Name}'",
    },
    {
        "name": "sc_raw",
        "description": "Retrieves the raw value of a field from item",
        "validationRegEx": "",
        "template": "sc_raw ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:Field Name}'",
        "pipeTemplate": "sc_raw '${1:Field Name}'",
    },
    {
        "name": "sc_follow",
        "description": "Retrieves an item linked in a field. If the field can link to multiple items - the first one is returned. If no items are linked, returns null.",
        "validationRegEx": "",
        "template": "sc_follow ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:Field Name}'",
        "pipeTemplate": "sc_follow '${1:Field Name}'",
    },
    {
        "name": "sc_followmany",
        "description": "Retrieves the collection of items linked in a field. If no items are linked, returns null.",
        "validationRegEx": "",
        "template": "sc_followmany ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:Field Name}'",
        "pipeTemplate": "sc_followmany '${1:Field Name}'",
    },
    {
        "name": "sc_link",
        "description": "Returns the link to the provided item. If item is null, returns '#'",
        "validationRegEx": "",
        "template": "sc_link ${1|i_item,i_datasource,i_home,i_page,i_site|}",
        "pipeTemplate": "sc_link",
    },
    {
        "name": "sc_medialink",
        "description": "Returns the media link to the provided item. If item is null, returns '#'",
        "validationRegEx": "",
        "template": "sc_medialink ${1|i_item,i_datasource|}",
        "pipeTemplate": "sc_medialink",
    },
    {
        "name": "sc_query",
        "description": "Executes sitecore query relative to the item provided and returns collection of items based on the results of the query.",
        "validationRegEx": "",
        "template": "sc_query ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:query:./*}'",
        "pipeTemplate": "sc_query '${1:query:./*}'",
    },
    {
        "name": "sc_parameter",
        "description": "",
        "validationRegEx": "",
        "template": "sc_parameter '${1:Parameter Name}'",
        "pipeTemplate": "sc_parameter",
    },
];
