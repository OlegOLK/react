import { Model } from 'radiks';

export class BasicRule extends Model {
    static className = 'Rule';
    static schema = {
        type: String,
        title: String,
        active: Boolean,
        userGroupId:{
            type: String,
            decrypted: true,
        }
    }
}
