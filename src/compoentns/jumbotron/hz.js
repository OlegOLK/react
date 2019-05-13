import React, { useGlobal } from 'reactn';

export default function Glb() {
    const [ ruleCreation, setRuleCreation ] = useGlobal('ruleCreation');
    console.log('getglobals', ruleCreation, [ ruleCreation, setRuleCreation ]);
    //return [ ruleCreation, setRuleCreation ];
    return(
        <div>
            {ruleCreation}
        </div>
    )
}
