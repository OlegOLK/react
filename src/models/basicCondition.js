import { Model } from 'radiks';

export class BasicCondition extends Model {
    static className = 'BasicCondition';
    static schema = {
        ruleId: {
            type: String,
            decrypted: true,
        },
        type: String,
        active: Boolean,
        userGroupId:{
            type: String,
            decrypted: true,
        }
    }
}


export class DateTimeCondition extends BasicCondition {
    static className = 'DateTimeCondition';
    static schema = {
        triggerTime: Number
    }

    static defaults = {
        type: 'dateTimeCondition'
    }
}