export const FORM_STATES = `<div class="lz-container-field">
        <div class="lz-label">Default</div>
        <div class="lz-field">
            <input class="" type="text" name="text" placeholder="Um texto aleatório">
        </div>
        <div class="lz-feedback">
            <span>Uma mensagem explicativa</span>
        </div>
</div>

<div class="lz-container-field">
        <div class="lz-label">Error</div>
        <div class="lz-field lz-field--invalid">
            <input class="" type="text" name="text" placeholder="Um texto aleatório">
        </div>
        <div class="lz-feedback lz-feedback--error lz-feedback--error--active">
            <span>Uma mensagem de erro triste =/</span>
        </div>
</div>

<div class="lz-container-field">
        <div class="lz-label">Disabled</div>
        <div class="lz-field lz-field--disabled">
            <input class="" type="text" name="text" placeholder="Um texto aleatório" disabled>
        </div>
</div>`;

export const FORM_SELECT = `<div class="lz-container-field">
        <div class="lz-label">Default</div>
        <div class="lz-field">
            <select class="form-select">
                <option selected>Selecione uma opção</option>
                <option value="1">Valor 1</option>
                <option value="2">Valor 2</option>
                <option value="3">Valor 3</option>
            </select>
        </div>
</div>

<div class="lz-container-field">
        <div class="lz-label">Error</div>
        <div class="lz-field lz-field--invalid">
            <select class="form-select">
                <option selected>Selecione uma opção</option>
                <option value="1">Valor 1</option>
                <option value="2">Valor 2</option>
                <option value="3">Valor 3</option>
            </select>
        </div>
        <div class="lz-feedback lz-feedback--error lz-feedback--error--active">
            <span>Uma mensagem de erro triste =/</span>
        </div>
</div>

<div class="lz-container-field">
        <div class="lz-label">Disabled</div>
        <div class="lz-field lz-field--disabled">
            <select class="form-select" disabled>
                <option selected>Selecione uma opção</option>
                <option value="1">Valor 1</option>
                <option value="2">Valor 2</option>
                <option value="3">Valor 3</option>
            </select>
        </div>
</div>`;

export const INPUT_RADIO_BLOCK = `<div class="lz-container-field-group">
        <div class="lz-label">Group</div>
        <div class="lz-container-field">
            <div class="lz-radio">
                <input type="radio" id="group1" name="group" checked>
                <label for="group1">Apple</label>
            </div>
        </div>

        <div class="lz-container-field">
            <div class="lz-radio">
                <input type="radio" id="group2" name="group">
                <label for="group2">Peach</label>
            </div>
        </div>

        <div class="lz-container-field">
            <div class="lz-radio">
                <input type="radio" id="group3" name="group">
                <label for="group3">Orange</label>
            </div>
        </div>
</div>`;

export const INPUT_RADIO_INLINE = `<div class="lz-container-field-group">
        <div class="lz-label">Inline</div>
        <div class="lz-display-flex-start lz-justify-baseline lz-container-field-group-container">
            <div class="lz-container-field lz-container-field--inline">
                <div class="lz-radio">
                        <input type="radio" id="inline1" name="inline" checked>
                        <label for="inline1">Apple</label>
                </div>
            </div>
            <div class="lz-container-field lz-container-field--inline">
                <div class="lz-radio">
                        <input type="radio" id="inline2" name="inline">
                        <label for="inline2">Peach</label>
                </div>
            </div>
            <div class="lz-container-field lz-container-field--inline">
                <div class="lz-radio">
                        <input type="radio" id="inline3" name="inline">
                        <label for="inline3">Orange</label>
                </div>
            </div>
        </div>
        <div class="lz-feedback lz-feedback--error lz-feedback--error--active">
            <span>Uma mensagem de erro triste =/</span>
        </div>
</div>`;

export const INPUT_CHECK_GROUP = `<div class="lz-container-field-group">
        <div class="lz-label">Group</div>
        <div class="lz-container-field">
            <div class="lz-checkbox">
                <input type="checkbox" id="checkbox_group_1" />
                <label for="checkbox_group_1">Red</label>
            </div>
        </div>
        <div class="lz-container-field">
            <div class="lz-checkbox">
                <input type="checkbox" id="checkbox_group_2" checked="checked" />
                <label for="checkbox_group_2">Yellow</label>
            </div>
        </div>
        <div class="lz-container-field">
            <div class="lz-checkbox">
                <input type="checkbox" id="checkbox_group_3" checked="checked" disabled="disabled" />
                <label for="checkbox_group_3">Green</label>
            </div>
        </div>
        <div class="lz-container-field">
            <div class="lz-checkbox">
                <input type="checkbox" id="checkbox_group_4" disabled="disabled" />
                <label for="checkbox_group_4">Brown</label>
            </div>
        </div>
</div>`;

export const INPUT_CHECK_INLINE = `<div class="lz-container-field-group">
        <div class="lz-label">Inline</div>
        <div class="lz-display-flex-start lz-justify-baseline lz-container-field-group-container">
            <div class="lz-container-field lz-container-field--inline">
                <div class="lz-checkbox">
                    <input type="checkbox" id="checkbox_inline_1" />
                    <label for="checkbox_inline_1">Red</label>
                </div>
            </div>
            <div class="lz-container-field lz-container-field--inline">
                <div class="lz-checkbox">
                    <input type="checkbox" id="checkbox_inline_2" checked="checked" />
                    <label for="checkbox_inline_2">Yellow</label>
                </div>
            </div>
            <div class="lz-container-field lz-container-field--inline">
                <div class="lz-checkbox">
                    <input type="checkbox" id="checkbox_inline_3" checked="checked" disabled="disabled" />
                    <label for="checkbox_inline_3">Green</label>
                </div>
            </div>
            <div class="lz-container-field lz-container-field--inline">
                <div class="lz-checkbox">
                    <input type="checkbox" id="checkbox_inline_4" disabled="disabled" />
                    <label for="checkbox_inline_4">Brown</label>
                </div>
            </div>
        </div>
        <div class="lz-feedback lz-feedback--error lz-feedback--error--active">
            <span>Uma mensagem de erro triste =/</span>
        </div>
</div>`;