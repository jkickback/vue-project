import { AdminFieldType } from "@/enums/admin-field-type";
import AdminField from "@/models/admin-field";
import AdminForm from "@/models/admin-form";
import Tax from "@/models/domain/tax";
import SelectOption from "@/models/select-option";

export default class TaxService {
    static readonly ApiUrl: string = '/Admin/Tax'
    static readonly AdminForm: AdminForm = new AdminForm({
            Name: 'Edit Something',
            Description: 'This is a form to edit some specific thing that we should explain here.',
            Columns: 3,
            Fields: [
            new AdminField({
                Name: 'Name',
                Label: 'Name',
                Type: AdminFieldType.Text,
                Value: 'John Doe',
                Placeholder: '',
                Required: false
            }),
            new AdminField({
                Name: 'Email',
                Label: 'Email',
                Type: AdminFieldType.Text,
                Value: '',
                Placeholder: '',
                Required: true
            }),
            new AdminField({
                Name: 'Age',
                Label: 'Age',
                Type: AdminFieldType.Number,
                Value: 21,
                Placeholder: '',
                Required: false
            }),
            new AdminField({
                Name: 'Types',
                Label: 'Types',
                Type: AdminFieldType.Select,
                Value: '2',
                Placeholder: '',
                Required: false,
                Options: [
                new SelectOption('1', 'Type 1'),
                new SelectOption('2', 'Type 2'),
                new SelectOption('3', 'Type 3')
                ]
            }),
            new AdminField({
                Name: 'EffectiveDate',
                Label: 'Effective Date',
                Type: AdminFieldType.Date,
                Value: '2020-05-02',
                Placeholder: 'Effective Date',
                Required: false
            }),
            new AdminField({
                Name: 'HasChildren',
                Label: 'Has Children',
                Type: AdminFieldType.Checkbox,
                Value: 'false',
                Placeholder: '',
                Required: false
            }),
            ]
    })
    static GetAll = function () {
        return new Array<Tax>({
            TaxId: 1,
            Name: 'Tax 1',
            Rate: 0.05
        }, {
            TaxId: 2,
            Name: 'Tax 2',
            Rate: 0.10
        }, {
            TaxId: 3,
            Name: 'Tax 3',
            Rate: 0.15
        });
        // const response = await fetch(TaxService.ApiUrl);
        // const data = await response.json();
        // return data.map((t: Tax) => new Tax(t));
    }
}